import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-latin-america');
}

export default function CoxaotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-latin-america" />;
}
