import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara');
}

export default function BestTibiaraKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara" />;
}
