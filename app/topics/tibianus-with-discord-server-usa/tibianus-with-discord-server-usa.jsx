import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-usa');
}

export default function TibianusWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-usa" />;
}
