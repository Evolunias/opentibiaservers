import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-tibia');
}

export default function NewTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-tibia" />;
}
