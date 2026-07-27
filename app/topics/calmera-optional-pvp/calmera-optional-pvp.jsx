import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-optional-pvp');
}

export default function CalmeraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="calmera-optional-pvp" />;
}
