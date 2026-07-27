import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot');
}

export default function NoResetRubinotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot" />;
}
