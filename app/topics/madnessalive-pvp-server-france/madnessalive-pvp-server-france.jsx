import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-france');
}

export default function MadnessalivePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-france" />;
}
