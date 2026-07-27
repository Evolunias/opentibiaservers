import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-usa');
}

export default function InfernalOtNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-usa" />;
}
