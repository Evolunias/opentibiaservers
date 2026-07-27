import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-private-server');
}

export default function LowrateImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-private-server" />;
}
