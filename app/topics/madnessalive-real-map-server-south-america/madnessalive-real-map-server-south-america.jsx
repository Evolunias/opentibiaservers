import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-south-america');
}

export default function MadnessaliveRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-south-america" />;
}
