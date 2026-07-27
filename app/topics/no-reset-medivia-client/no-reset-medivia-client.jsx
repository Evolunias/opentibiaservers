import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-client');
}

export default function NoResetMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-client" />;
}
