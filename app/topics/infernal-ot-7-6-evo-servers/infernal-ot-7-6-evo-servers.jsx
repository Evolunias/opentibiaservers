import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-evo-servers');
}

export default function InfernalOt76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-evo-servers" />;
}
