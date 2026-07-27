import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-register');
}

export default function CustomInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-register" />;
}
