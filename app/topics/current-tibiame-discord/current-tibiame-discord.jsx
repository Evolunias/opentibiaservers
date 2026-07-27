import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-discord');
}

export default function CurrentTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-discord" />;
}
