import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot');
}

export default function PopularCarlinotKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot" />;
}
