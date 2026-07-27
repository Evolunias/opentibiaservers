import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-login');
}

export default function PopularCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-login" />;
}
