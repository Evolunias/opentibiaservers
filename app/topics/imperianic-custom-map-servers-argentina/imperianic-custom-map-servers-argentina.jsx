import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-argentina');
}

export default function ImperianicCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-argentina" />;
}
