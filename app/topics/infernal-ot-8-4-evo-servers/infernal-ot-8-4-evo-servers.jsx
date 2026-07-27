import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-evo-servers');
}

export default function InfernalOt84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-evo-servers" />;
}
