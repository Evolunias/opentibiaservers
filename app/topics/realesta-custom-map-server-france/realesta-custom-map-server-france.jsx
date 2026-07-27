import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-france');
}

export default function RealestaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-france" />;
}
