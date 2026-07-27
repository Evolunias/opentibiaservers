import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-france');
}

export default function CoxaotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-france" />;
}
