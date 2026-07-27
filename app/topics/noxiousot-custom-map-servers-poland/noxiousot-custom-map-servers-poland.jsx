import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-poland');
}

export default function NoxiousotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-poland" />;
}
