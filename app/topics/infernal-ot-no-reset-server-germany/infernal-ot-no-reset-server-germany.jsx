import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-germany');
}

export default function InfernalOtNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-germany" />;
}
