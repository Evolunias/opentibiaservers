import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-north-america');
}

export default function RealeraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-north-america" />;
}
