import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-website');
}

export default function BestCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-website" />;
}
