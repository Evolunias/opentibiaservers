import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-open-tibia');
}

export default function CustomRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-open-tibia" />;
}
