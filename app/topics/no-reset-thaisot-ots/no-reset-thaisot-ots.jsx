import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-ots');
}

export default function NoResetThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-ots" />;
}
