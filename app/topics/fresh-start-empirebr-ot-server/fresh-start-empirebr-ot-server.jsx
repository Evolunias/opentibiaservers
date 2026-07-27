import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-ot-server');
}

export default function FreshStartEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-ot-server" />;
}
