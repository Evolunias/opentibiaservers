import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-north-america');
}

export default function BaiakSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-north-america" />;
}
