import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-client');
}

export default function CurrentClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-client" />;
}
