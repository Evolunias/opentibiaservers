import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness');
}

export default function ActiveOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness" />;
}
