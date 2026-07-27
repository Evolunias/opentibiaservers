import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-open-tibia');
}

export default function ActiveRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-open-tibia" />;
}
