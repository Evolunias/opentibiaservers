import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-login');
}

export default function FreshStartNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-login" />;
}
