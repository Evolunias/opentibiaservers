import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-ot-server');
}

export default function OfficialEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-ot-server" />;
}
