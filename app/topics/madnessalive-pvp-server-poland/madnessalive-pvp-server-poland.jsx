import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-poland');
}

export default function MadnessalivePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-poland" />;
}
