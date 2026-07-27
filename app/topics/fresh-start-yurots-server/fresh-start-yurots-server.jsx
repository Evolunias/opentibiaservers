import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-server');
}

export default function FreshStartYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-server" />;
}
