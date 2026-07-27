import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-register');
}

export default function TopInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-register" />;
}
