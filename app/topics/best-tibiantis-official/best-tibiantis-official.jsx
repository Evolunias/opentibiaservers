import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-official');
}

export default function BestTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-official" />;
}
