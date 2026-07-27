import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-login');
}

export default function LowrateXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-login" />;
}
