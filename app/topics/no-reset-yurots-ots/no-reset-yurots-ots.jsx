import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-ots');
}

export default function NoResetYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-ots" />;
}
