import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-tibia');
}

export default function LowrateTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-tibia" />;
}
