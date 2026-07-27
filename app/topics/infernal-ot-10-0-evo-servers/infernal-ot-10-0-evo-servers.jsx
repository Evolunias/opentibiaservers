import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-evo-servers');
}

export default function InfernalOt100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-evo-servers" />;
}
