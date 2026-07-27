import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-open-tibia');
}

export default function LowrateAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-open-tibia" />;
}
