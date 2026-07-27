import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-tibia');
}

export default function OfficialRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-tibia" />;
}
