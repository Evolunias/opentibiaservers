import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-tibia');
}

export default function TopTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-tibia" />;
}
