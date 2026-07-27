import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-discord');
}

export default function PopularTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-discord" />;
}
