import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-ot-server');
}

export default function FreshStartNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-ot-server" />;
}
