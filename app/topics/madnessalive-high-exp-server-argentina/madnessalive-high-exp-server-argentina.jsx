import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-argentina');
}

export default function MadnessaliveHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-argentina" />;
}
