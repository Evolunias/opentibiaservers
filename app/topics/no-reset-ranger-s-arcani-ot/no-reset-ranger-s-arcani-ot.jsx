import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-ot');
}

export default function NoResetRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-ot" />;
}
