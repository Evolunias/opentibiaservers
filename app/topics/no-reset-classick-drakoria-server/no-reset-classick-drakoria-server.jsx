import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-server');
}

export default function NoResetClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-server" />;
}
