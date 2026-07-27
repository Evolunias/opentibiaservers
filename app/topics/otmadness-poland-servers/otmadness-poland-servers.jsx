import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-poland-servers');
}

export default function OtmadnessPolandServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-poland-servers" />;
}
