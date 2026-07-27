import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-fresh-start-server');
}

export default function NtoStar11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-fresh-start-server" />;
}
