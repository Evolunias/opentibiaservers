import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-south-america');
}

export default function RookgaardTalesRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-south-america" />;
}
