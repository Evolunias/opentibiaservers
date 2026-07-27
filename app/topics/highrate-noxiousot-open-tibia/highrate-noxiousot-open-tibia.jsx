import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-open-tibia');
}

export default function HighrateNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-open-tibia" />;
}
