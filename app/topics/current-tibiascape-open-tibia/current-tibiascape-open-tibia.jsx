import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-open-tibia');
}

export default function CurrentTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-open-tibia" />;
}
