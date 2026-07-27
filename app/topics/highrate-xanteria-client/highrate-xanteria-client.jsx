import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-client');
}

export default function HighrateXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-client" />;
}
