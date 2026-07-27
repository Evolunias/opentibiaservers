import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-with-discord-server');
}

export default function NtoStar15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-with-discord-server" />;
}
