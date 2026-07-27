import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-north-america');
}

export default function TibianusWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-north-america" />;
}
