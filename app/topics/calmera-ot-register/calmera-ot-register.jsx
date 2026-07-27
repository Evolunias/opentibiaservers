import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-register');
}

export default function CalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-register" />;
}
