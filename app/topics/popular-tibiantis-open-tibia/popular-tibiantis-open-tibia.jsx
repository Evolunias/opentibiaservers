import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-open-tibia');
}

export default function PopularTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-open-tibia" />;
}
