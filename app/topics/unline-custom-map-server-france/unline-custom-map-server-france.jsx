import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-france');
}

export default function UnlineCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-france" />;
}
