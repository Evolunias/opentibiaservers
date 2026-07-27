import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-open-tibia');
}

export default function PopularTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-open-tibia" />;
}
