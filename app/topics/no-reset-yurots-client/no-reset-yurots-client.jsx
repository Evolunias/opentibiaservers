import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-client');
}

export default function NoResetYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-client" />;
}
