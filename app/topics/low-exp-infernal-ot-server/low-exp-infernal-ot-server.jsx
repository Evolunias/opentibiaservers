import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-infernal-ot-server');
}

export default function LowExpInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-infernal-ot-server" />;
}
