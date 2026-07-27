import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-login');
}

export default function CalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-login" />;
}
