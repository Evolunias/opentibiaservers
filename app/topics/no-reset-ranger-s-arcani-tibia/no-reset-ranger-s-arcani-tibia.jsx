import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-tibia');
}

export default function NoResetRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-tibia" />;
}
