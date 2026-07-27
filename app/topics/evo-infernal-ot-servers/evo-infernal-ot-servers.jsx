import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-infernal-ot-servers');
}

export default function EvoInfernalOtServersKeywordPage() {
  return <StaticKeywordPage slug="evo-infernal-ot-servers" />;
}
