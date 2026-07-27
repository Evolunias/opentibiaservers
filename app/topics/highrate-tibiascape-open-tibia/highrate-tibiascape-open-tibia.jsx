import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-open-tibia');
}

export default function HighrateTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-open-tibia" />;
}
