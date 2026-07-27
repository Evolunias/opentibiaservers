import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-discord');
}

export default function LowrateNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-discord" />;
}
