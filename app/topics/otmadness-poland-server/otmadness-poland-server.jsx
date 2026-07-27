import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-poland-server');
}

export default function OtmadnessPolandServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-poland-server" />;
}
