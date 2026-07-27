import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-france');
}

export default function HighExpRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-france" />;
}
