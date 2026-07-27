import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-ots');
}

export default function NewMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-ots" />;
}
