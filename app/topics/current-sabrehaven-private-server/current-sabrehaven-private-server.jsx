import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-private-server');
}

export default function CurrentSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-private-server" />;
}
