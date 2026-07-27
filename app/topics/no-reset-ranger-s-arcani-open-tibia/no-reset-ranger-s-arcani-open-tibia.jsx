import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-open-tibia');
}

export default function NoResetRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-open-tibia" />;
}
