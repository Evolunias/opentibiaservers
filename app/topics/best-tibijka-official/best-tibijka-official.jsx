import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-official');
}

export default function BestTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-official" />;
}
