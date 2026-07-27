import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-server');
}

export default function NoResetSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-server" />;
}
