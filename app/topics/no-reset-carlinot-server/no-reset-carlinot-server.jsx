import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-server');
}

export default function NoResetCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-server" />;
}
