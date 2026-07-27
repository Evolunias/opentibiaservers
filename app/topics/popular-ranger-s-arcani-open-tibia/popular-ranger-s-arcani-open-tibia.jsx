import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-open-tibia');
}

export default function PopularRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-open-tibia" />;
}
