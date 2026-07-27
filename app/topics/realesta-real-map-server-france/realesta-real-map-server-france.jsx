import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-france');
}

export default function RealestaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-france" />;
}
