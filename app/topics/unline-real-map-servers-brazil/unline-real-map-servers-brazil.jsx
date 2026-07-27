import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-brazil');
}

export default function UnlineRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-brazil" />;
}
