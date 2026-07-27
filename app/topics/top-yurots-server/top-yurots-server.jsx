import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-server');
}

export default function TopYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-server" />;
}
