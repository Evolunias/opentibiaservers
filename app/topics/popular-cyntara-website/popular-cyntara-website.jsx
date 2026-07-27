import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-website');
}

export default function PopularCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-website" />;
}
