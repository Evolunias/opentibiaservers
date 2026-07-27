import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-tibia');
}

export default function ActiveRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-tibia" />;
}
