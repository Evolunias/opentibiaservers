import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-server');
}

export default function NewEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-server" />;
}
