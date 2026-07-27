import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-open-tibia-alternatives');
}

export default function LiberaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="libera-open-tibia-alternatives" />;
}
