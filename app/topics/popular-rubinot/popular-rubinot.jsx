import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot');
}

export default function PopularRubinotKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot" />;
}
