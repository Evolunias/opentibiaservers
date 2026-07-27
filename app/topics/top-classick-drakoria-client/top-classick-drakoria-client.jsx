import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-client');
}

export default function TopClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-client" />;
}
