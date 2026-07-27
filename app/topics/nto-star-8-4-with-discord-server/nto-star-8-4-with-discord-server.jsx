import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-with-discord-server');
}

export default function NtoStar84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-with-discord-server" />;
}
