import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-map');
}

export default function NoxiousotMapKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-map" />;
}
