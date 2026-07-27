import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-europe');
}

export default function TibianusWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-europe" />;
}
