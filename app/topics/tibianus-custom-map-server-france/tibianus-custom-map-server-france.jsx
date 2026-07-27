import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-france');
}

export default function TibianusCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-france" />;
}
