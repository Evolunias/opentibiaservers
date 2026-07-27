import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-optional-pvp');
}

export default function ValoriaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="valoria-optional-pvp" />;
}
