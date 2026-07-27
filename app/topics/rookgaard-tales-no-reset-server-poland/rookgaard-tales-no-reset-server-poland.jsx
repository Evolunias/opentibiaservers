import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-poland');
}

export default function RookgaardTalesNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-poland" />;
}
