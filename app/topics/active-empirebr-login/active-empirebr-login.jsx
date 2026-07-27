import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-login');
}

export default function ActiveEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-login" />;
}
