import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-ot-server');
}

export default function NoResetClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-ot-server" />;
}
