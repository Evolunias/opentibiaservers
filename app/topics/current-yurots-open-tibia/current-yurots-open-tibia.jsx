import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-open-tibia');
}

export default function CurrentYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-open-tibia" />;
}
