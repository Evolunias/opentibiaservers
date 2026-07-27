import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-active-players-server-europe');
}

export default function CoxaotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-active-players-server-europe" />;
}
