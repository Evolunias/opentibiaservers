import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-poland');
}

export default function NoxiousotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-poland" />;
}
