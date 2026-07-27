import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-ot');
}

export default function FreshStartMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-ot" />;
}
