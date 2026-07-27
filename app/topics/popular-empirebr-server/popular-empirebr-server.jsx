import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-server');
}

export default function PopularEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-server" />;
}
