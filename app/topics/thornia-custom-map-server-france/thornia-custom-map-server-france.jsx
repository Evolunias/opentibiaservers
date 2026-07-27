import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-france');
}

export default function ThorniaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-france" />;
}
