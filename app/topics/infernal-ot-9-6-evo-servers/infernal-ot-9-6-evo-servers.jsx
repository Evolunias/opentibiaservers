import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-evo-servers');
}

export default function InfernalOt96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-evo-servers" />;
}
