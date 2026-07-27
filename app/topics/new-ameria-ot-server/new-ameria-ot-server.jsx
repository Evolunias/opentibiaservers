import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-ot-server');
}

export default function NewAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-ot-server" />;
}
