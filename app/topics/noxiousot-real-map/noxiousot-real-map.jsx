import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map');
}

export default function NoxiousotRealMapKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map" />;
}
