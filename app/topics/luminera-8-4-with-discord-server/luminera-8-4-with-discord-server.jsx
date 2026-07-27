import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-with-discord-server');
}

export default function Luminera84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-with-discord-server" />;
}
