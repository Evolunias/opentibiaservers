import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-brazil');
}

export default function MadnessaliveLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-brazil" />;
}
