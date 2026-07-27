import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-poland');
}

export default function MadnessaliveCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-poland" />;
}
