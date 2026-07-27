import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-with-discord-server');
}

export default function Luminera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-with-discord-server" />;
}
