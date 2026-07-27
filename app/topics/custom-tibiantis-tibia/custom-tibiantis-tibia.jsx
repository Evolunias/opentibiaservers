import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-tibia');
}

export default function CustomTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-tibia" />;
}
