import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-optional-pvp');
}

export default function SoleraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="solera-optional-pvp" />;
}
