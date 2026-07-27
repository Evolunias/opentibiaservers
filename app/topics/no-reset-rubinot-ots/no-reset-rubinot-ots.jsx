import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-ots');
}

export default function NoResetRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-ots" />;
}
