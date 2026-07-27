import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-login');
}

export default function PopularRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-login" />;
}
