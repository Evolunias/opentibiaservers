import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-open-tibia');
}

export default function NewRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-open-tibia" />;
}
