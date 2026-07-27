import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-ot');
}

export default function ActiveOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-ot" />;
}
