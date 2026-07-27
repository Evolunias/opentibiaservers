import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-discord');
}

export default function FreshStartTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-discord" />;
}
