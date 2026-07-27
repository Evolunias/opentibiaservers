import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-private-server');
}

export default function NewOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-private-server" />;
}
