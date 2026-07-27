import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-official');
}

export default function FreshStartOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-official" />;
}
