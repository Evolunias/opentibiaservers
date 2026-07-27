import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-register');
}

export default function NewInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-register" />;
}
