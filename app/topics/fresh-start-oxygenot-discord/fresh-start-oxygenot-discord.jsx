import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-discord');
}

export default function FreshStartOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-discord" />;
}
