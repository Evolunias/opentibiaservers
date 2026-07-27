import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-register');
}

export default function LowrateCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-register" />;
}
