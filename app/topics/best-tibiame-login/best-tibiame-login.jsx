import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-login');
}

export default function BestTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-login" />;
}
