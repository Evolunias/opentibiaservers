import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-tibia');
}

export default function LowrateEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-tibia" />;
}
