import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-private-server');
}

export default function NewSeasonEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-private-server" />;
}
