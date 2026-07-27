import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-canada');
}

export default function NilotWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-canada" />;
}
