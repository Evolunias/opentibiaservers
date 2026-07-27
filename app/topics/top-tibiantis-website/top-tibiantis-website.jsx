import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-website');
}

export default function TopTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-website" />;
}
