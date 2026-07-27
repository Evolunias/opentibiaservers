import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots');
}

export default function NoResetYurotsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots" />;
}
