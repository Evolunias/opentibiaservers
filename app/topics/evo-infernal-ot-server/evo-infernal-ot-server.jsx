import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-infernal-ot-server');
}

export default function EvoInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="evo-infernal-ot-server" />;
}
