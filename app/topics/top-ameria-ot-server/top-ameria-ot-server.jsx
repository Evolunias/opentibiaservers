import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-ot-server');
}

export default function TopAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-ot-server" />;
}
