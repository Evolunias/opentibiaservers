import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-france-servers');
}

export default function MadnessaliveFranceServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-france-servers" />;
}
