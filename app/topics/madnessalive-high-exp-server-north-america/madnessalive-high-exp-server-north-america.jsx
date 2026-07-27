import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-north-america');
}

export default function MadnessaliveHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-north-america" />;
}
