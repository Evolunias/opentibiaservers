import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-ot');
}

export default function BestTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-ot" />;
}
