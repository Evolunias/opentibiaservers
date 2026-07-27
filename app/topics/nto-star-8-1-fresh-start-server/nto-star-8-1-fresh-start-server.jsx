import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-fresh-start-server');
}

export default function NtoStar81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-fresh-start-server" />;
}
