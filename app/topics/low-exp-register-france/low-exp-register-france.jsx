import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-france');
}

export default function LowExpRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-france" />;
}
