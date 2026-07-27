import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-with-discord-server');
}

export default function Nilot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-with-discord-server" />;
}
