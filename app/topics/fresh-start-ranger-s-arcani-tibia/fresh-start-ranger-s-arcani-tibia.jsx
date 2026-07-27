import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-tibia');
}

export default function FreshStartRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-tibia" />;
}
