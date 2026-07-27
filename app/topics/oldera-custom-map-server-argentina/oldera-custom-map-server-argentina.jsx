import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-argentina');
}

export default function OlderaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-argentina" />;
}
