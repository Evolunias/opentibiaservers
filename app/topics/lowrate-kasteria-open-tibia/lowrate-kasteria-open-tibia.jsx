import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-open-tibia');
}

export default function LowrateKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-open-tibia" />;
}
