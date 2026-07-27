import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-ot');
}

export default function ActiveMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-ot" />;
}
