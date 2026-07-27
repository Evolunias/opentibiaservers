import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-commands');
}

export default function RookgaardTalesCommandsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-commands" />;
}
