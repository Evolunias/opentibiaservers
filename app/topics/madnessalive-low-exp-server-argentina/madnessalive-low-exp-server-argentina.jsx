import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-argentina');
}

export default function MadnessaliveLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-argentina" />;
}
