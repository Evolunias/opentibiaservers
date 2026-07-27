import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-ot-server');
}

export default function NoResetCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-ot-server" />;
}
