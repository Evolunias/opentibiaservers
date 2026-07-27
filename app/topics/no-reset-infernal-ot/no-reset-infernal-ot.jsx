import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot');
}

export default function NoResetInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot" />;
}
