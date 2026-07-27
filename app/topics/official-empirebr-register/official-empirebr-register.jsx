import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-register');
}

export default function OfficialEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-register" />;
}
