import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-private-server');
}

export default function PopularEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-private-server" />;
}
