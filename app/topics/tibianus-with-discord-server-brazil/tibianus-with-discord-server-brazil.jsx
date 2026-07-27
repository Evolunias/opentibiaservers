import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-brazil');
}

export default function TibianusWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-brazil" />;
}
