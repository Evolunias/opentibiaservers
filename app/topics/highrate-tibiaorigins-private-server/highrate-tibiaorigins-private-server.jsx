import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-private-server');
}

export default function HighrateTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-private-server" />;
}
