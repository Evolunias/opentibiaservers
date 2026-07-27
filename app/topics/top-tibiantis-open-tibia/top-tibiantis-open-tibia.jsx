import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-open-tibia');
}

export default function TopTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-open-tibia" />;
}
