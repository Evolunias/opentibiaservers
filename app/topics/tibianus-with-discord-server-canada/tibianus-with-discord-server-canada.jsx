import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-canada');
}

export default function TibianusWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-canada" />;
}
