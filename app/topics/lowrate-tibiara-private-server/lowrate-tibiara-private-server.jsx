import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-private-server');
}

export default function LowrateTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-private-server" />;
}
