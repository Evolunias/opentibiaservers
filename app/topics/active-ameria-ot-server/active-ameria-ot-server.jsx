import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-ot-server');
}

export default function ActiveAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-ot-server" />;
}
