import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-mexico-server');
}

export default function EmpirebrMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-mexico-server" />;
}
