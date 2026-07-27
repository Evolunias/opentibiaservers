import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-ots');
}

export default function NoResetRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-ots" />;
}
