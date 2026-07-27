import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-poland');
}

export default function RookgaardTalesRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-poland" />;
}
