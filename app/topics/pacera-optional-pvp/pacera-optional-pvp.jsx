import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-optional-pvp');
}

export default function PaceraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="pacera-optional-pvp" />;
}
