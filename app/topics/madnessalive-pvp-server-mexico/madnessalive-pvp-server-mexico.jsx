import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-mexico');
}

export default function MadnessalivePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-mexico" />;
}
