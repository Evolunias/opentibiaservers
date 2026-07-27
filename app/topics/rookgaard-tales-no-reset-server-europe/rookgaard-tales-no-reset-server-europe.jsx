import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-europe');
}

export default function RookgaardTalesNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-europe" />;
}
