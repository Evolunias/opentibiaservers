import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-server');
}

export default function FreshStartEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-server" />;
}
