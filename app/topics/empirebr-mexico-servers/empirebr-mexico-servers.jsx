import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-mexico-servers');
}

export default function EmpirebrMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-mexico-servers" />;
}
