import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-open-tibia');
}

export default function CurrentTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-open-tibia" />;
}
