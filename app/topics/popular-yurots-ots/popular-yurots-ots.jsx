import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-ots');
}

export default function PopularYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-ots" />;
}
