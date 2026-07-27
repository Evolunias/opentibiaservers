import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-europe');
}

export default function MadnessaliveCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-europe" />;
}
