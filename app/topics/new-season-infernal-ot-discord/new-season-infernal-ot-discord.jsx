import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-discord');
}

export default function NewSeasonInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-discord" />;
}
