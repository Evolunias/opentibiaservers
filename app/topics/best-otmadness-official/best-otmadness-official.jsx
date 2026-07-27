import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-official');
}

export default function BestOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-official" />;
}
