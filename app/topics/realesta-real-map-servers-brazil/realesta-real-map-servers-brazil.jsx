import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-brazil');
}

export default function RealestaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-brazil" />;
}
