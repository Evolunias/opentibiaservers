import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-ots');
}

export default function HighrateXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-ots" />;
}
