import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-poland');
}

export default function MadnessaliveCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-poland" />;
}
