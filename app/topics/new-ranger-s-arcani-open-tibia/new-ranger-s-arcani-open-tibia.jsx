import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-open-tibia');
}

export default function NewRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-open-tibia" />;
}
