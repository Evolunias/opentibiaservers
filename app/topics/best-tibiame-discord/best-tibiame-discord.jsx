import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-discord');
}

export default function BestTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-discord" />;
}
