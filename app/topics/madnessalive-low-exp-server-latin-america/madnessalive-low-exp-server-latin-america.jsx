import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-latin-america');
}

export default function MadnessaliveLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-latin-america" />;
}
