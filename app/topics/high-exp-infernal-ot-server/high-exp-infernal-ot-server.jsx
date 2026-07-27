import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-infernal-ot-server');
}

export default function HighExpInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-infernal-ot-server" />;
}
