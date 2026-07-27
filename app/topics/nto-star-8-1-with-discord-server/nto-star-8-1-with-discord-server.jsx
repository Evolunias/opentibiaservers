import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-with-discord-server');
}

export default function NtoStar81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-with-discord-server" />;
}
