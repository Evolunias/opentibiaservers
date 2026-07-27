import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-open-tibia');
}

export default function ActiveRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-open-tibia" />;
}
