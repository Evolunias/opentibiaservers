import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-with-discord-server');
}

export default function Luminera772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-with-discord-server" />;
}
