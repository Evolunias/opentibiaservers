import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-private-server');
}

export default function LowrateMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-private-server" />;
}
