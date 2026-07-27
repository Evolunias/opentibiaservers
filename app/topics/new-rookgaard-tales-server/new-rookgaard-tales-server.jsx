import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-server');
}

export default function NewRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-server" />;
}
