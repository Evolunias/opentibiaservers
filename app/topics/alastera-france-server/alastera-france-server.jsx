import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-france-server');
}

export default function AlasteraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-france-server" />;
}
