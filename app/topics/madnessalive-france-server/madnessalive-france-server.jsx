import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-france-server');
}

export default function MadnessaliveFranceServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-france-server" />;
}
