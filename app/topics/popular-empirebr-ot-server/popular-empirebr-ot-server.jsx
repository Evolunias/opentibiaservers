import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-ot-server');
}

export default function PopularEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-ot-server" />;
}
