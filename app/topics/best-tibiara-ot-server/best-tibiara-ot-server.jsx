import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-ot-server');
}

export default function BestTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-ot-server" />;
}
