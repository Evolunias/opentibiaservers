import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-fresh-start-server');
}

export default function NtoStar12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-fresh-start-server" />;
}
