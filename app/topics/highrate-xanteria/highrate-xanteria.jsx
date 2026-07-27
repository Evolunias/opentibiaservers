import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria');
}

export default function HighrateXanteriaKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria" />;
}
