import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-private-server');
}

export default function CustomOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-private-server" />;
}
