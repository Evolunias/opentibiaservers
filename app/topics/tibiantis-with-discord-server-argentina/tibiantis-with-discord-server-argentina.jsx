import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-argentina');
}

export default function TibiantisWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-argentina" />;
}
