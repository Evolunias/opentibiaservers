import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-open-tibia');
}

export default function LowrateTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-open-tibia" />;
}
