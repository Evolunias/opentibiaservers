import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-private-server');
}

export default function FreshStartEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-private-server" />;
}
