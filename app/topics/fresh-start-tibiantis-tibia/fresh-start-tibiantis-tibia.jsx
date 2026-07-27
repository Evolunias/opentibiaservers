import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-tibia');
}

export default function FreshStartTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-tibia" />;
}
