import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-france');
}

export default function MadnessaliveLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-france" />;
}
