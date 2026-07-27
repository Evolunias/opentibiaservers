import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-status');
}

export default function RookgaardTalesStatusKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-status" />;
}
