import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-south-america');
}

export default function FreshStartDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-south-america" />;
}
