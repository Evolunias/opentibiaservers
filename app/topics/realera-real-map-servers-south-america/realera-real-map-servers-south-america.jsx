import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-south-america');
}

export default function RealeraRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-south-america" />;
}
