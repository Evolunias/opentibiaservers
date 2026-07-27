import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-usa');
}

export default function RealeraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-usa" />;
}
