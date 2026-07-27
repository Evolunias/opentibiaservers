import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-poland');
}

export default function TibianusWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-poland" />;
}
