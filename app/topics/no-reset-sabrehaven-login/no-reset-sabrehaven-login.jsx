import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-login');
}

export default function NoResetSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-login" />;
}
