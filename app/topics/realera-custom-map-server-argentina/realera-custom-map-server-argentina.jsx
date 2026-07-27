import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-argentina');
}

export default function RealeraCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-argentina" />;
}
