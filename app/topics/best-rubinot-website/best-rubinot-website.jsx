import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-website');
}

export default function BestRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-website" />;
}
