import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-fresh-start-server');
}

export default function NtoStar76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-fresh-start-server" />;
}
