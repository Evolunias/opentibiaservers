import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-poland');
}

export default function InfernalOtNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-poland" />;
}
