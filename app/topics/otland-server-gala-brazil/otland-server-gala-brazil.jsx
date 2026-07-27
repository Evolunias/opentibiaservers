import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-brazil');
}

export default function OtlandServerGalaBrazilKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-brazil" />;
}
