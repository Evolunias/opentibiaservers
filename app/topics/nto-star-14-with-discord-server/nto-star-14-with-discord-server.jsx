import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-with-discord-server');
}

export default function NtoStar14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-with-discord-server" />;
}
