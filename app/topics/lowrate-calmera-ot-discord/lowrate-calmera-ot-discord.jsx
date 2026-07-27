import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-discord');
}

export default function LowrateCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-discord" />;
}
