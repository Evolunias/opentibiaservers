import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-ots');
}

export default function CustomMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-ots" />;
}
