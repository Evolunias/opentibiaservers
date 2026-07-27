import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-france');
}

export default function DuraOnlineCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-france" />;
}
