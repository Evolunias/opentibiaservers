import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-tibia');
}

export default function LowrateThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-tibia" />;
}
