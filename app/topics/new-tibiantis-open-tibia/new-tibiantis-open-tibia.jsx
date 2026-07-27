import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-open-tibia');
}

export default function NewTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-open-tibia" />;
}
