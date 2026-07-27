import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-europe');
}

export default function MadnessaliveHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-europe" />;
}
