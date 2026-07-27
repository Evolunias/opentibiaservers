import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-ots');
}

export default function ActiveMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-ots" />;
}
