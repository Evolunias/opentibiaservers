import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-server');
}

export default function BestTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-server" />;
}
