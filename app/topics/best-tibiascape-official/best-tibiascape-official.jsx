import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-official');
}

export default function BestTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-official" />;
}
