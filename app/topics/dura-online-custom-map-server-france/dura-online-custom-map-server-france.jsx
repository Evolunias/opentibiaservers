import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-france');
}

export default function DuraOnlineCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-france" />;
}
