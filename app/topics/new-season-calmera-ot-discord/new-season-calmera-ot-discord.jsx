import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-discord');
}

export default function NewSeasonCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-discord" />;
}
