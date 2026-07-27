import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-brazil');
}

export default function RealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-brazil" />;
}
