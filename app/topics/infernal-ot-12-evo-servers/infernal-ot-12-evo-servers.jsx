import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-evo-servers');
}

export default function InfernalOt12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-evo-servers" />;
}
