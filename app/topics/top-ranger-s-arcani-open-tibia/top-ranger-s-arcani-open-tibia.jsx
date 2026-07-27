import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-open-tibia');
}

export default function TopRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-open-tibia" />;
}
