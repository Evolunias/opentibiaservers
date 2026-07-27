import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-ot-server');
}

export default function PopularNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-ot-server" />;
}
