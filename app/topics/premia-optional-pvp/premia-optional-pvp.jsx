import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-optional-pvp');
}

export default function PremiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="premia-optional-pvp" />;
}
