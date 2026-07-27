import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-open-tibia');
}

export default function LowrateXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-open-tibia" />;
}
