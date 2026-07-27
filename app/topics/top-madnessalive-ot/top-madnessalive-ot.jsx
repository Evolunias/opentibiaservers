import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-ot');
}

export default function TopMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-ot" />;
}
