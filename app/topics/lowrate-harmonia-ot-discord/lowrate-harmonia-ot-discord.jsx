import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-discord');
}

export default function LowrateHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-discord" />;
}
