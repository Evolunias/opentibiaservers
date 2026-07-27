import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-with-discord-server');
}

export default function Luminera71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-with-discord-server" />;
}
