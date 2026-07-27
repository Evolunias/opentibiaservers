import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-server');
}

export default function HighrateTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-server" />;
}
