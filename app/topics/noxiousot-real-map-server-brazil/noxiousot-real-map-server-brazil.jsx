import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-brazil');
}

export default function NoxiousotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-brazil" />;
}
