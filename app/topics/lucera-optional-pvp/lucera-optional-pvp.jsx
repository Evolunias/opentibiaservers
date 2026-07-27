import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-optional-pvp');
}

export default function LuceraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="lucera-optional-pvp" />;
}
