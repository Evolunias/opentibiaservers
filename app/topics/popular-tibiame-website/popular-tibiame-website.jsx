import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-website');
}

export default function PopularTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-website" />;
}
