import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-official');
}

export default function NoResetInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-official" />;
}
