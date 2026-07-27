import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-germany');
}

export default function MadnessaliveCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-germany" />;
}
