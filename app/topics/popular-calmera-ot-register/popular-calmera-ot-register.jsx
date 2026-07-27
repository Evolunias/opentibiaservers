import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-register');
}

export default function PopularCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-register" />;
}
