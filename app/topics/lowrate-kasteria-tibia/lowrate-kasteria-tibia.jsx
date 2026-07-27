import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-tibia');
}

export default function LowrateKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-tibia" />;
}
