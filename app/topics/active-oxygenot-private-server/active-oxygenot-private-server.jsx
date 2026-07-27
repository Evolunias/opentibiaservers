import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-private-server');
}

export default function ActiveOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-private-server" />;
}
