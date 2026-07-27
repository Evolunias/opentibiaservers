import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-open-tibia');
}

export default function FreshStartTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-open-tibia" />;
}
