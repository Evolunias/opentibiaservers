import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp');
}

export default function MadnessalivePvpKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp" />;
}
