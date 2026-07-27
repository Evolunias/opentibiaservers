import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-with-discord-server');
}

export default function Nilot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-with-discord-server" />;
}
