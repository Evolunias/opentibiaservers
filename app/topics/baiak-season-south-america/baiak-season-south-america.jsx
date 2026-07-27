import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-south-america');
}

export default function BaiakSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-south-america" />;
}
