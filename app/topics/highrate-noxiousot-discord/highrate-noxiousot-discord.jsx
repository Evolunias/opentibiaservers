import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-discord');
}

export default function HighrateNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-discord" />;
}
