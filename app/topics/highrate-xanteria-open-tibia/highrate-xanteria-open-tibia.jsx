import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-open-tibia');
}

export default function HighrateXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-open-tibia" />;
}
