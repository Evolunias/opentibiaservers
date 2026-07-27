import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-official');
}

export default function AmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="ameria-official" />;
}
