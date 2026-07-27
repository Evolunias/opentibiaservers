import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive');
}

export default function ActiveMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive" />;
}
