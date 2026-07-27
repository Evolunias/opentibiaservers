import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-ot');
}

export default function PopularYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-ot" />;
}
