import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-open-tibia');
}

export default function CurrentRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-open-tibia" />;
}
