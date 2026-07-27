import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-with-discord-server');
}

export default function NtoStar11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-with-discord-server" />;
}
