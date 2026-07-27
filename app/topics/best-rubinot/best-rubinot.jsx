import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot');
}

export default function BestRubinotKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot" />;
}
