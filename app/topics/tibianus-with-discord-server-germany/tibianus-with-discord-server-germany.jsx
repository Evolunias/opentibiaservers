import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-germany');
}

export default function TibianusWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-germany" />;
}
