import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-website');
}

export default function BestTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-website" />;
}
