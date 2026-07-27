import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani');
}

export default function NoResetRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani" />;
}
