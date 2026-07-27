import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-ots');
}

export default function LowrateXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-ots" />;
}
