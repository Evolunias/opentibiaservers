import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-tibia');
}

export default function NewRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-tibia" />;
}
