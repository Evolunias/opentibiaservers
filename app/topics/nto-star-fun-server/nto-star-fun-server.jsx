import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fun-server');
}

export default function NtoStarFunServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fun-server" />;
}
