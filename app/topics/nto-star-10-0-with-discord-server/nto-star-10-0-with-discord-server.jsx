import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-with-discord-server');
}

export default function NtoStar100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-with-discord-server" />;
}
