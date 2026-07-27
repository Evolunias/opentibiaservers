import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-servers-germany');
}

export default function MadnessaliveRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-servers-germany" />;
}
