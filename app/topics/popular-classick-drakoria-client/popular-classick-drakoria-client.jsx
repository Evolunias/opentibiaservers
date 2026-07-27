import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-client');
}

export default function PopularClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-client" />;
}
