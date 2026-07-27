import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-germany');
}

export default function RookgaardTalesRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-germany" />;
}
