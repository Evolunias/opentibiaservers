import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-france');
}

export default function LumineraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-france" />;
}
