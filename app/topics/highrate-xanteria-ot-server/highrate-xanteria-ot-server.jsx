import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-ot-server');
}

export default function HighrateXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-ot-server" />;
}
