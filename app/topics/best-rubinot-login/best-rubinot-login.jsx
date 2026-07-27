import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-login');
}

export default function BestRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-login" />;
}
