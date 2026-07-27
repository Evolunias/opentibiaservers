import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-tibia');
}

export default function LowrateEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-tibia" />;
}
