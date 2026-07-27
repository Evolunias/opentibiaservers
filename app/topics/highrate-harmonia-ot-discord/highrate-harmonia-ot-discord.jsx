import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-discord');
}

export default function HighrateHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-discord" />;
}
