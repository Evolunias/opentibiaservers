import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-login');
}

export default function TopEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-login" />;
}
