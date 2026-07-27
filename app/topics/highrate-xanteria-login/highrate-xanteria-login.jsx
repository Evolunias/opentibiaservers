import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-login');
}

export default function HighrateXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-login" />;
}
