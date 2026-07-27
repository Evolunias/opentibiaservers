import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-client');
}

export default function BestClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-client" />;
}
