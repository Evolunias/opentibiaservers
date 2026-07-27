import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-ots');
}

export default function FreshStartMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-ots" />;
}
