import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-tibia');
}

export default function CurrentTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-tibia" />;
}
