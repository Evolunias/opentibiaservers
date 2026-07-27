import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-with-discord-server');
}

export default function NtoStar80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-with-discord-server" />;
}
