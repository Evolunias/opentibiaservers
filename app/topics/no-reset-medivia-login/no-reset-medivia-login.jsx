import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-login');
}

export default function NoResetMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-login" />;
}
