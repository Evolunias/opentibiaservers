import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-ot-server');
}

export default function PopularKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-ot-server" />;
}
