import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-mexico');
}

export default function BaiakSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-mexico" />;
}
