import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-login');
}

export default function ActiveCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-login" />;
}
