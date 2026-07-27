import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-tibia');
}

export default function LowrateAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-tibia" />;
}
