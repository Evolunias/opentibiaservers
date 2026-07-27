import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-servers-europe');
}

export default function MadnessaliveRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-servers-europe" />;
}
