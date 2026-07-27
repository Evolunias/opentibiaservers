import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-discord');
}

export default function NewSeasonHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-discord" />;
}
