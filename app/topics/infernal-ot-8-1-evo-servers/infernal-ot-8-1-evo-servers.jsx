import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-evo-servers');
}

export default function InfernalOt81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-evo-servers" />;
}
