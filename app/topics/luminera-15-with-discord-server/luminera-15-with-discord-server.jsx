import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-with-discord-server');
}

export default function Luminera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-with-discord-server" />;
}
