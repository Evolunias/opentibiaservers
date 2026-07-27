import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-tibia');
}

export default function ActiveRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-tibia" />;
}
