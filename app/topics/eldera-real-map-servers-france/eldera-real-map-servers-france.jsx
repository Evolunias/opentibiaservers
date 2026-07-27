import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-france');
}

export default function ElderaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-france" />;
}
