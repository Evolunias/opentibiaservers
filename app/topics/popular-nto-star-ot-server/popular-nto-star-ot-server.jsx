import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-ot-server');
}

export default function PopularNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-ot-server" />;
}
