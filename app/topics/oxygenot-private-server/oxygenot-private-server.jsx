import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-private-server');
}

export default function OxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-private-server" />;
}
