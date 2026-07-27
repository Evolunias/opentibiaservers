import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-server');
}

export default function BestTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-server" />;
}
