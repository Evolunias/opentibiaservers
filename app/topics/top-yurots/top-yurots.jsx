import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots');
}

export default function TopYurotsKeywordPage() {
  return <StaticKeywordPage slug="top-yurots" />;
}
