import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-server');
}

export default function PopularNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-server" />;
}
