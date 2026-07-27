import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-private-server');
}

export default function OfficialEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-private-server" />;
}
