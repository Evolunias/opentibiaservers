import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-website');
}

export default function TopTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-website" />;
}
