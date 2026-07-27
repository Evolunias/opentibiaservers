import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-register');
}

export default function ActiveInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-register" />;
}
