import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-germany');
}

export default function FreshStartDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-germany" />;
}
