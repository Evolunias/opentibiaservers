import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-fresh-start-server');
}

export default function NtoStar13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-fresh-start-server" />;
}
