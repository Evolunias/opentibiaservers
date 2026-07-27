import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-login');
}

export default function BestCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-login" />;
}
