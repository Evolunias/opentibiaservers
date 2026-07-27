import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-ot-server');
}

export default function NoResetRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-ot-server" />;
}
