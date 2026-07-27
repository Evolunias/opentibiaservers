import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-tibia');
}

export default function LowrateNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-tibia" />;
}
