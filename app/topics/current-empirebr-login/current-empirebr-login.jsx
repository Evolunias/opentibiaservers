import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-login');
}

export default function CurrentEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-login" />;
}
