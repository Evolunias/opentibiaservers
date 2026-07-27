import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-europe');
}

export default function AlasteraWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-europe" />;
}
