import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-open-tibia');
}

export default function NewTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-open-tibia" />;
}
