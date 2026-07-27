import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-fun-server');
}

export default function BestFunServerKeywordPage() {
  return <StaticKeywordPage slug="best-fun-server" />;
}
