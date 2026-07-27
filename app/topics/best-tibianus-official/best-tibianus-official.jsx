import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-official');
}

export default function BestTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-official" />;
}
