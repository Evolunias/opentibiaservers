import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-germany');
}

export default function RookgaardTalesNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-germany" />;
}
