import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-server');
}

export default function CurrentEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-server" />;
}
