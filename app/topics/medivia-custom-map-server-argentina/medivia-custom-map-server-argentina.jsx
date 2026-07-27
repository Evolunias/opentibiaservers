import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-argentina');
}

export default function MediviaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-argentina" />;
}
