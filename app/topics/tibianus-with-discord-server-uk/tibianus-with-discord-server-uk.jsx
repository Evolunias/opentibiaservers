import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-uk');
}

export default function TibianusWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-uk" />;
}
