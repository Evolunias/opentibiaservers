import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-discord');
}

export default function BestTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-discord" />;
}
