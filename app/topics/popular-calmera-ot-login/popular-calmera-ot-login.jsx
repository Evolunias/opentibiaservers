import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-login');
}

export default function PopularCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-login" />;
}
