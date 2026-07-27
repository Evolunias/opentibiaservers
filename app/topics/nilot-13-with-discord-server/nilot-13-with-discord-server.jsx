import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-with-discord-server');
}

export default function Nilot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-with-discord-server" />;
}
