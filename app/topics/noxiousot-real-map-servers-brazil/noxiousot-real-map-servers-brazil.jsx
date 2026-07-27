import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-brazil');
}

export default function NoxiousotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-brazil" />;
}
