import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-private-server');
}

export default function FreshStartOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-private-server" />;
}
