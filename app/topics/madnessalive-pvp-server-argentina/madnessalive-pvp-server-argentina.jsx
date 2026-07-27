import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-argentina');
}

export default function MadnessalivePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-argentina" />;
}
