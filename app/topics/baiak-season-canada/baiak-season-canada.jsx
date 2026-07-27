import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-canada');
}

export default function BaiakSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-canada" />;
}
