import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-fresh-start-server');
}

export default function NtoStar74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-fresh-start-server" />;
}
