import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-germany');
}

export default function NoxiousotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-germany" />;
}
