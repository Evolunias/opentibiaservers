import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-private-server');
}

export default function HighrateTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-private-server" />;
}
