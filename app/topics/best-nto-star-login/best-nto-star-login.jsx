import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-login');
}

export default function BestNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-login" />;
}
