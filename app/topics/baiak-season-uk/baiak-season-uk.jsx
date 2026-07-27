import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-uk');
}

export default function BaiakSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-uk" />;
}
