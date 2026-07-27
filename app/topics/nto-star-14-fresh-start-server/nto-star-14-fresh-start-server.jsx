import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-fresh-start-server');
}

export default function NtoStar14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-fresh-start-server" />;
}
