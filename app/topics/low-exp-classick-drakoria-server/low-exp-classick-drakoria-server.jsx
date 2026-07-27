import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-classick-drakoria-server');
}

export default function LowExpClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-classick-drakoria-server" />;
}
