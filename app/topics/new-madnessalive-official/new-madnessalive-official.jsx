import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-official');
}

export default function NewMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-official" />;
}
