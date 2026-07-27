import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-with-discord-server');
}

export default function Luminera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-with-discord-server" />;
}
