import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-ot');
}

export default function MadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-ot" />;
}
