import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-official');
}

export default function NewRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-official" />;
}
