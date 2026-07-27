import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-server');
}

export default function NoResetThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-server" />;
}
