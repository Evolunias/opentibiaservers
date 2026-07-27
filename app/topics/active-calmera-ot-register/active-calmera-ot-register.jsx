import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-register');
}

export default function ActiveCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-register" />;
}
