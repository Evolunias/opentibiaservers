import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-france');
}

export default function ThorniaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-france" />;
}
