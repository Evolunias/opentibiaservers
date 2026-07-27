import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-france');
}

export default function OlderaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-france" />;
}
