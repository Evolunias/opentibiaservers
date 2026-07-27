import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-server');
}

export default function NoResetRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-server" />;
}
