import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-tibia');
}

export default function PopularTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-tibia" />;
}
