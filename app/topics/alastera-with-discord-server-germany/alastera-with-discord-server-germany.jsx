import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-germany');
}

export default function AlasteraWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-germany" />;
}
