import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-germany');
}

export default function MadnessaliveCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-germany" />;
}
