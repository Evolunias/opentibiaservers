import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-servers-poland');
}

export default function MadnessaliveRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-servers-poland" />;
}
