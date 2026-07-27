import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-client');
}

export default function LowrateXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-client" />;
}
