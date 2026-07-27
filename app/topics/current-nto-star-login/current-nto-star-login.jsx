import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-login');
}

export default function CurrentNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-login" />;
}
