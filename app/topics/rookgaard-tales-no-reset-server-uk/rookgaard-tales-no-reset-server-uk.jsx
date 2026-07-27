import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-uk');
}

export default function RookgaardTalesNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-uk" />;
}
