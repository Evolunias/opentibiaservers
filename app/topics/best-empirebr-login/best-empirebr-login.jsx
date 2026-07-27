import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-login');
}

export default function BestEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-login" />;
}
