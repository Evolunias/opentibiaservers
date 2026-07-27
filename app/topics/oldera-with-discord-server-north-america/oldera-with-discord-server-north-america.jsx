import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-north-america');
}

export default function OlderaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-north-america" />;
}
