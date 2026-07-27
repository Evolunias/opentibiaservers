import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-official');
}

export default function NewOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-official" />;
}
