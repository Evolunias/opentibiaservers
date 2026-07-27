import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-tibia');
}

export default function LowrateNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-tibia" />;
}
