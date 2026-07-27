import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-login');
}

export default function OfficialEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-login" />;
}
