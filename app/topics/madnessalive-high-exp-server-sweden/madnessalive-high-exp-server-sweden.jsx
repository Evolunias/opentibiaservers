import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-sweden');
}

export default function MadnessaliveHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-sweden" />;
}
