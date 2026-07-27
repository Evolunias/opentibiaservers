import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-discord');
}

export default function NewSeasonZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-discord" />;
}
