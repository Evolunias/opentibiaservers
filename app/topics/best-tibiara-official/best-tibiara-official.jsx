import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-official');
}

export default function BestTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-official" />;
}
