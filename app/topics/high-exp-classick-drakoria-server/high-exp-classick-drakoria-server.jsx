import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-classick-drakoria-server');
}

export default function HighExpClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-classick-drakoria-server" />;
}
