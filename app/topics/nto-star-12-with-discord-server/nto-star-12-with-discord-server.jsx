import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-with-discord-server');
}

export default function NtoStar12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-with-discord-server" />;
}
