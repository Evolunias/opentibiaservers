import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-north-america');
}

export default function ThorniaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-north-america" />;
}
