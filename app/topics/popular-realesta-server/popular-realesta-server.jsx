import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-server');
}

export default function PopularRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-server" />;
}
