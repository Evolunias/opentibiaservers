import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame');
}

export default function PopularTibiameKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame" />;
}
