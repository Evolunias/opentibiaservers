import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-client');
}

export default function NoResetRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-client" />;
}
