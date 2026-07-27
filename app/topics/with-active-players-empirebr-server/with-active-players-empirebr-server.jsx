import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-empirebr-server');
}

export default function WithActivePlayersEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-empirebr-server" />;
}
