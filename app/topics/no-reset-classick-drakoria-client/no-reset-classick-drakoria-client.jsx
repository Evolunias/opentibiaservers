import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-client');
}

export default function NoResetClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-client" />;
}
