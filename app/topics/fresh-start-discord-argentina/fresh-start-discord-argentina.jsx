import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-argentina');
}

export default function FreshStartDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-argentina" />;
}
