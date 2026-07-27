import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-website');
}

export default function TopCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-website" />;
}
