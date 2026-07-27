import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-login');
}

export default function CustomCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-login" />;
}
