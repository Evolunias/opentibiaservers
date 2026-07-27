import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-tibia');
}

export default function LowrateCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-tibia" />;
}
