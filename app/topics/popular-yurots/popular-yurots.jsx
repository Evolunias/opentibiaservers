import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots');
}

export default function PopularYurotsKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots" />;
}
