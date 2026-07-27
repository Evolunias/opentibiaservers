import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-south-america');
}

export default function RealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-south-america" />;
}
