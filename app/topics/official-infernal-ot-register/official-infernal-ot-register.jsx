import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-register');
}

export default function OfficialInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-register" />;
}
