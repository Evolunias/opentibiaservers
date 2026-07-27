import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-argentina');
}

export default function AlasteraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-argentina" />;
}
