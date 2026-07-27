import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-tibia');
}

export default function CurrentCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-canob-tibia" />;
}
