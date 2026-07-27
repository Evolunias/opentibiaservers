import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-private-server');
}

export default function LowrateSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-private-server" />;
}
