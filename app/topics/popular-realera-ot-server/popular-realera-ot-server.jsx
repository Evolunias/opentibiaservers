import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-ot-server');
}

export default function PopularRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-ot-server" />;
}
