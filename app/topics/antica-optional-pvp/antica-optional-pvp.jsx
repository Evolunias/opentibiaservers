import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-optional-pvp');
}

export default function AnticaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="antica-optional-pvp" />;
}
