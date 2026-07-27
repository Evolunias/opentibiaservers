import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-optional-pvp');
}

export default function JuleraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="julera-optional-pvp" />;
}
