import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-server');
}

export default function PopularRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-server" />;
}
