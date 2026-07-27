import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-with-discord-server');
}

export default function Nilot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-with-discord-server" />;
}
