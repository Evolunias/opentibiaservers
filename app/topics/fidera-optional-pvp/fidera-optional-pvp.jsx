import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-optional-pvp');
}

export default function FideraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="fidera-optional-pvp" />;
}
