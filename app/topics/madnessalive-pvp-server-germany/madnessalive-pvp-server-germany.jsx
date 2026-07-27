import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-germany');
}

export default function MadnessalivePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-germany" />;
}
