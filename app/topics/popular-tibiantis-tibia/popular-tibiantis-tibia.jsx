import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-tibia');
}

export default function PopularTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-tibia" />;
}
