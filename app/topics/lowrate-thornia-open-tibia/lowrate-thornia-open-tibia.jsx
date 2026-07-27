import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-open-tibia');
}

export default function LowrateThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-open-tibia" />;
}
