import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-france-servers');
}

export default function AlasteraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-france-servers" />;
}
