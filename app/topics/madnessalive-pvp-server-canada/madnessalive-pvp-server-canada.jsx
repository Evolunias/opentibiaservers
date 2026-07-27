import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-canada');
}

export default function MadnessalivePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-canada" />;
}
