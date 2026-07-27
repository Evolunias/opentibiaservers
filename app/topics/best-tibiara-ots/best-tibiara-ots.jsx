import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-ots');
}

export default function BestTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-ots" />;
}
