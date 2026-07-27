import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-poland');
}

export default function OlderaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-poland" />;
}
