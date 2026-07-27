import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-open-tibia');
}

export default function NewTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-open-tibia" />;
}
