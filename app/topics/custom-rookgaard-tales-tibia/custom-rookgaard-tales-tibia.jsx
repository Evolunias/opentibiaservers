import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-tibia');
}

export default function CustomRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-tibia" />;
}
