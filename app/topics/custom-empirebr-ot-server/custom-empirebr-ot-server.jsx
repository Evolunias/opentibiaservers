import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-ot-server');
}

export default function CustomEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-ot-server" />;
}
