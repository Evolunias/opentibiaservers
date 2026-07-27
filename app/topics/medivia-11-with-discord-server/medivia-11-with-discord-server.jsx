import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-with-discord-server');
}

export default function Medivia11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-with-discord-server" />;
}
