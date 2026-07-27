import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-server');
}

export default function PopularRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-server" />;
}
