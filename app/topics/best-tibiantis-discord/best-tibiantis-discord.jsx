import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-discord');
}

export default function BestTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-discord" />;
}
