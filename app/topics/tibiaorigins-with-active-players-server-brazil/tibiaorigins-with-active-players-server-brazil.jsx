import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-brazil');
}

export default function TibiaoriginsWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-brazil" />;
}
