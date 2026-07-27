import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-usa');
}

export default function BaiakSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-usa" />;
}
