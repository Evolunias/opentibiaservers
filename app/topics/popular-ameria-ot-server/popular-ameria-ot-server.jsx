import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-ot-server');
}

export default function PopularAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-ot-server" />;
}
