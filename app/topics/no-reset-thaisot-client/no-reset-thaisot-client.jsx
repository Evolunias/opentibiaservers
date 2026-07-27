import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-client');
}

export default function NoResetThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-client" />;
}
