import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-open-tibia');
}

export default function CustomRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-open-tibia" />;
}
