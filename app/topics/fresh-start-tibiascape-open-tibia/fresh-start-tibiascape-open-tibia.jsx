import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-open-tibia');
}

export default function FreshStartTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-open-tibia" />;
}
