import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-fresh-start-server');
}

export default function NtoStar96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-fresh-start-server" />;
}
