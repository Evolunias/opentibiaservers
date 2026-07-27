import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-open-tibia');
}

export default function BestTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-open-tibia" />;
}
