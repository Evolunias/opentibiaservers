import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-latin-america');
}

export default function BaiakSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-latin-america" />;
}
