import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-ot-server');
}

export default function FreshStartAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-ot-server" />;
}
