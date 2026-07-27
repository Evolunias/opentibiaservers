import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-discord');
}

export default function OfficialCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-discord" />;
}
