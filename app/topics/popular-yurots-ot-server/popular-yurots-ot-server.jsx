import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-ot-server');
}

export default function PopularYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-ot-server" />;
}
