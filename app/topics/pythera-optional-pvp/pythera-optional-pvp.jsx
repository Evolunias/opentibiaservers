import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-optional-pvp');
}

export default function PytheraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="pythera-optional-pvp" />;
}
