import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-discord');
}

export default function FreshStartCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-discord" />;
}
