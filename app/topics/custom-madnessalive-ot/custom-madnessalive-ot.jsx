import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-ot');
}

export default function CustomMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-ot" />;
}
