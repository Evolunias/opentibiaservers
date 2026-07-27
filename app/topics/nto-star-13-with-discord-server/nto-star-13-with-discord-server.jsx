import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-with-discord-server');
}

export default function NtoStar13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-with-discord-server" />;
}
