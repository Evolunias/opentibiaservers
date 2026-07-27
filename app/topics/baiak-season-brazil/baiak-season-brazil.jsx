import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-brazil');
}

export default function BaiakSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-brazil" />;
}
