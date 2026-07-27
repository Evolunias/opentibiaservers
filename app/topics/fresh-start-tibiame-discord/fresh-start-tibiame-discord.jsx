import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-discord');
}

export default function FreshStartTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-discord" />;
}
