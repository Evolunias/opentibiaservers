import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-ot-server');
}

export default function NewEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-ot-server" />;
}
