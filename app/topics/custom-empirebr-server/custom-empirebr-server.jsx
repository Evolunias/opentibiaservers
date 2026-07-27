import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-server');
}

export default function CustomEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-server" />;
}
