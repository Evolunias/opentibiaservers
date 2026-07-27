import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-ot-server');
}

export default function PopularRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-ot-server" />;
}
