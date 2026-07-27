import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-ots');
}

export default function MadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-ots" />;
}
