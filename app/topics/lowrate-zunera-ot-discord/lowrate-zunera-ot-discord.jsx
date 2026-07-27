import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-discord');
}

export default function LowrateZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-discord" />;
}
