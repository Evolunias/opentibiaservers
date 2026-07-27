import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-germany');
}

export default function NoxiousotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-germany" />;
}
