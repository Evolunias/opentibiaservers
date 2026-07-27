import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-website');
}

export default function NoResetRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-website" />;
}
