import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-private-server');
}

export default function CurrentTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-private-server" />;
}
