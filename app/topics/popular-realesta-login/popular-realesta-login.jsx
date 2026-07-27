import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-login');
}

export default function PopularRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-login" />;
}
