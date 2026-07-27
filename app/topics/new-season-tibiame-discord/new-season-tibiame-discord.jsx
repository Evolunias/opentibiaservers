import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-discord');
}

export default function NewSeasonTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-discord" />;
}
