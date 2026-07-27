import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-open-tibia');
}

export default function LowrateCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-open-tibia" />;
}
