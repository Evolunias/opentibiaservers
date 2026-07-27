import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-discord');
}

export default function TopTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-discord" />;
}
