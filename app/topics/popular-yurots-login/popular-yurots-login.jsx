import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-login');
}

export default function PopularYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-login" />;
}
