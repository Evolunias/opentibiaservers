import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-server');
}

export default function FreshStartNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-server" />;
}
