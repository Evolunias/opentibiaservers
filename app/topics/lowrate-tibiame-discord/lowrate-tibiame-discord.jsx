import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-discord');
}

export default function LowrateTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-discord" />;
}
