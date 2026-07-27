import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-empirebr-server');
}

export default function BaiakEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-empirebr-server" />;
}
