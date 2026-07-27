import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-ot-server');
}

export default function PopularCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-ot-server" />;
}
