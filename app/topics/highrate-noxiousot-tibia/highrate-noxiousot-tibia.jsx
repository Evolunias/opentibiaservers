import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-tibia');
}

export default function HighrateNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-tibia" />;
}
