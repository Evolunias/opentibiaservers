import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-open-tibia');
}

export default function CurrentTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-open-tibia" />;
}
