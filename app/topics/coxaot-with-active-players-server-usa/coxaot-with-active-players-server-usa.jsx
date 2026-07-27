import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-usa');
}

export default function CoxaotWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-usa" />;
}
