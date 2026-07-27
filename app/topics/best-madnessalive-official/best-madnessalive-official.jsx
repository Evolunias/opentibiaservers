import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-official');
}

export default function BestMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-official" />;
}
