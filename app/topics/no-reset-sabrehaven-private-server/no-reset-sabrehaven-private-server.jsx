import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-private-server');
}

export default function NoResetSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-private-server" />;
}
