import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-private-server');
}

export default function ActiveSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-private-server" />;
}
