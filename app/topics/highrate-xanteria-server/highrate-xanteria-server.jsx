import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-server');
}

export default function HighrateXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-server" />;
}
