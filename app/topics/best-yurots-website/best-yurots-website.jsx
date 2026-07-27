import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-website');
}

export default function BestYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-website" />;
}
