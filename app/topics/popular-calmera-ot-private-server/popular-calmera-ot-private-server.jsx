import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-private-server');
}

export default function PopularCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-private-server" />;
}
