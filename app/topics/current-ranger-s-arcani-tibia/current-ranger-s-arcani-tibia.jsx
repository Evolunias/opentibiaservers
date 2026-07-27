import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-tibia');
}

export default function CurrentRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-tibia" />;
}
