import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-server');
}

export default function PopularCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-server" />;
}
