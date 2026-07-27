import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-tibia');
}

export default function HighrateXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-tibia" />;
}
