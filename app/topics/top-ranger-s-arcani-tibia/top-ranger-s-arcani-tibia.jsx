import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-tibia');
}

export default function TopRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-tibia" />;
}
