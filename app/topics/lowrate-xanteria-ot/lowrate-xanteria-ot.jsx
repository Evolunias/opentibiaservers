import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-ot');
}

export default function LowrateXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-ot" />;
}
