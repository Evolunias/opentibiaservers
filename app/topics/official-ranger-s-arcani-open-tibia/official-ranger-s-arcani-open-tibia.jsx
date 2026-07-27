import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-open-tibia');
}

export default function OfficialRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-open-tibia" />;
}
