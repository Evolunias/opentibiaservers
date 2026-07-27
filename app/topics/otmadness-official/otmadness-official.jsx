import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-official');
}

export default function OtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="otmadness-official" />;
}
