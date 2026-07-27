import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-brazil');
}

export default function RealeraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-brazil" />;
}
