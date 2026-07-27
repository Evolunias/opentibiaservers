import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-open-pvp');
}

export default function ValoriaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="valoria-open-pvp" />;
}
