import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-france');
}

export default function MadnessaliveFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-france" />;
}
