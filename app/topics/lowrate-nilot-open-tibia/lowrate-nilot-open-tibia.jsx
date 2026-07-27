import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-open-tibia');
}

export default function LowrateNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-open-tibia" />;
}
