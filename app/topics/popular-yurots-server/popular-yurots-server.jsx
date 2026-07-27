import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-server');
}

export default function PopularYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-server" />;
}
