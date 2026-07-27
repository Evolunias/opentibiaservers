import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-login');
}

export default function LowrateRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-login" />;
}
