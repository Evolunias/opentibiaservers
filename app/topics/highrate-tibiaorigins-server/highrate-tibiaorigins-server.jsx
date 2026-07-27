import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-server');
}

export default function HighrateTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-server" />;
}
