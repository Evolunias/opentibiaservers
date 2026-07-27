import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-france');
}

export default function LumineraRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-france" />;
}
