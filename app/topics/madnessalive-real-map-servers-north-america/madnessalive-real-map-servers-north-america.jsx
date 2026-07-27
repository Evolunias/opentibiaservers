import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-servers-north-america');
}

export default function MadnessaliveRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-servers-north-america" />;
}
