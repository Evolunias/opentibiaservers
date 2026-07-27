import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-optional-pvp');
}

export default function GuardiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="guardia-optional-pvp" />;
}
