import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-official');
}

export default function FreshStartMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-official" />;
}
