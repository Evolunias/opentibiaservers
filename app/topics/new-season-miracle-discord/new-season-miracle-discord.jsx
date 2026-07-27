import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-discord');
}

export default function NewSeasonMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-discord" />;
}
