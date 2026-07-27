import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-login');
}

export default function TopNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-login" />;
}
