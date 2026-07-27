import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-ot');
}

export default function NoResetRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-ot" />;
}
