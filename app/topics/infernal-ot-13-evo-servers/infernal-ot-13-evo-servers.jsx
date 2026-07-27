import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-evo-servers');
}

export default function InfernalOt13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-evo-servers" />;
}
