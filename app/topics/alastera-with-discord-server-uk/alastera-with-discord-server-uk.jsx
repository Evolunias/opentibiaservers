import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-uk');
}

export default function AlasteraWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-uk" />;
}
