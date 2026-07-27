import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-brazil');
}

export default function OlderaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-brazil" />;
}
