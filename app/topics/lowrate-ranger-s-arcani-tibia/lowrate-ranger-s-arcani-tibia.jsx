import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-tibia');
}

export default function LowrateRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-tibia" />;
}
