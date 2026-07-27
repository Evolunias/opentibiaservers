import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-france');
}

export default function MadnessaliveHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-france" />;
}
