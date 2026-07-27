import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-login');
}

export default function TopCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-login" />;
}
