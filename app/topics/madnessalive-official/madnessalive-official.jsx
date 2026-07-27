import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-official');
}

export default function MadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-official" />;
}
