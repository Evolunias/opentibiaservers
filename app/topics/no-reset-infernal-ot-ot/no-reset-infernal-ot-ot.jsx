import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-ot');
}

export default function NoResetInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-ot" />;
}
