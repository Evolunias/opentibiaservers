import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive');
}

export default function CustomMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive" />;
}
