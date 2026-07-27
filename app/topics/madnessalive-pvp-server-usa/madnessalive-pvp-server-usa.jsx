import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-usa');
}

export default function MadnessalivePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-usa" />;
}
