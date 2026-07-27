import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-south-america');
}

export default function OlderaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-south-america" />;
}
