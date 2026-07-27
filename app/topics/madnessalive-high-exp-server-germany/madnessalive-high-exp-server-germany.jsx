import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-germany');
}

export default function MadnessaliveHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-germany" />;
}
