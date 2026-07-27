import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-france');
}

export default function RealestaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-france" />;
}
