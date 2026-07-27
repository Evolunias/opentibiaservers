import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-evo-server');
}

export default function InfernalOt12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-evo-server" />;
}
