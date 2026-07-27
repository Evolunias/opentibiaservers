import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-poland');
}

export default function AlasteraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-poland" />;
}
