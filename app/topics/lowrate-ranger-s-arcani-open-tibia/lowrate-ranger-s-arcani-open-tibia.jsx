import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-open-tibia');
}

export default function LowrateRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-open-tibia" />;
}
