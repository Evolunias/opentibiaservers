import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-login');
}

export default function LowrateCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-login" />;
}
