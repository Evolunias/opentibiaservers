import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-france');
}

export default function LumineraCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-france" />;
}
