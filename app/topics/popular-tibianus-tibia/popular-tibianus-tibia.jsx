import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-tibia');
}

export default function PopularTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-tibia" />;
}
