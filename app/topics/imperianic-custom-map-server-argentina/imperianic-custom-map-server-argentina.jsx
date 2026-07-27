import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-argentina');
}

export default function ImperianicCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-argentina" />;
}
