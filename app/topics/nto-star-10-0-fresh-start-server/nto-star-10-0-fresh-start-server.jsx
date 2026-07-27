import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-fresh-start-server');
}

export default function NtoStar100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-fresh-start-server" />;
}
