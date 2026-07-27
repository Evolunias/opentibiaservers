import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-open-tibia');
}

export default function CurrentXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-open-tibia" />;
}
