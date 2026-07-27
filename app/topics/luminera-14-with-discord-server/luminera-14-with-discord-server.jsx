import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-with-discord-server');
}

export default function Luminera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-with-discord-server" />;
}
