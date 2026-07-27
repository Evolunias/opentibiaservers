import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-ot-server');
}

export default function CustomAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-ot-server" />;
}
