import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-germany-servers');
}

export default function RookgaardTalesGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-germany-servers" />;
}
