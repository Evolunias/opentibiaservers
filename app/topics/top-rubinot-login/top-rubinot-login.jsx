import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-login');
}

export default function TopRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-login" />;
}
