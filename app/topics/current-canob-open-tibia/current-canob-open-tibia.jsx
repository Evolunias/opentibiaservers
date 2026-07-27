import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-open-tibia');
}

export default function CurrentCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-canob-open-tibia" />;
}
