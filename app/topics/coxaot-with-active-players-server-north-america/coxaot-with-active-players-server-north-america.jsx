import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-north-america');
}

export default function CoxaotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-north-america" />;
}
