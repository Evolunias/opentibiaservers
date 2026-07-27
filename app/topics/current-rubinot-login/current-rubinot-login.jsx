import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-login');
}

export default function CurrentRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-login" />;
}
