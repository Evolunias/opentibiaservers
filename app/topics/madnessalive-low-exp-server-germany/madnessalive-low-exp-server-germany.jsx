import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-germany');
}

export default function MadnessaliveLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-germany" />;
}
