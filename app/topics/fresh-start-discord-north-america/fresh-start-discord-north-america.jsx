import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-north-america');
}

export default function FreshStartDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-north-america" />;
}
