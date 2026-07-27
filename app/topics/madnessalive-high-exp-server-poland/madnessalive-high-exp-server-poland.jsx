import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-poland');
}

export default function MadnessaliveHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-poland" />;
}
