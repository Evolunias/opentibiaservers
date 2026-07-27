import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-north-america');
}

export default function MadnessaliveLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-north-america" />;
}
