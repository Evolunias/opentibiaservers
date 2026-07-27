import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-client');
}

export default function FreshStartNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-client" />;
}
