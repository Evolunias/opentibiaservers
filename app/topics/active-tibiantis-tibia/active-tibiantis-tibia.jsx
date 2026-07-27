import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-tibia');
}

export default function ActiveTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-tibia" />;
}
