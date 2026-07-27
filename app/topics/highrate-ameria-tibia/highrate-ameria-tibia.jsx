import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-tibia');
}

export default function HighrateAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-tibia" />;
}
