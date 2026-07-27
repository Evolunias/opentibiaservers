import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-server');
}

export default function OfficialEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-server" />;
}
