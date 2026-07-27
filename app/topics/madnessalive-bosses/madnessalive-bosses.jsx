import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-bosses');
}

export default function MadnessaliveBossesKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-bosses" />;
}
