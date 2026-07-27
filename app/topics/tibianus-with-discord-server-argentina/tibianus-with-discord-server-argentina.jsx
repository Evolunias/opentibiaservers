import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-argentina');
}

export default function TibianusWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-argentina" />;
}
