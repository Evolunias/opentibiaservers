import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-poland');
}

export default function NoxiousotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-poland" />;
}
