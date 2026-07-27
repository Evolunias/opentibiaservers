import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-open-tibia');
}

export default function CustomXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-open-tibia" />;
}
