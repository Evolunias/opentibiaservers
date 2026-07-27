import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-poland');
}

export default function MadnessaliveLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-poland" />;
}
