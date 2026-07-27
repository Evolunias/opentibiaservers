import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-register');
}

export default function BestInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-register" />;
}
