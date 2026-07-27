import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-server');
}

export default function PopularCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-server" />;
}
