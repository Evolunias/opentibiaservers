import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-private-server');
}

export default function FreshStartNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-private-server" />;
}
