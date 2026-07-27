import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-europe');
}

export default function MadnessaliveCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-europe" />;
}
