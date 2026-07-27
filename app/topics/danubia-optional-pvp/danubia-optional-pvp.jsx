import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-optional-pvp');
}

export default function DanubiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="danubia-optional-pvp" />;
}
