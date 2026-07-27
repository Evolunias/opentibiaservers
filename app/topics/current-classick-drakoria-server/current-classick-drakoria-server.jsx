import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-server');
}

export default function CurrentClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-server" />;
}
