import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-with-discord-server');
}

export default function Medivia81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-with-discord-server" />;
}
