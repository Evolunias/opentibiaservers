import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-open-tibia');
}

export default function LowrateNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-open-tibia" />;
}
