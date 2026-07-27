import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-brazil');
}

export default function AureraGlobalRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-brazil" />;
}
