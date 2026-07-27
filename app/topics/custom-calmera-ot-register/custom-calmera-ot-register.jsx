import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-register');
}

export default function CustomCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-register" />;
}
