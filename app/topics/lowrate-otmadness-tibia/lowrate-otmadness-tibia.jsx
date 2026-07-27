import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-tibia');
}

export default function LowrateOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-tibia" />;
}
