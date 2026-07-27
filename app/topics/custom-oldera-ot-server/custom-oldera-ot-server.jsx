import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-ot-server');
}

export default function CustomOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-ot-server" />;
}
