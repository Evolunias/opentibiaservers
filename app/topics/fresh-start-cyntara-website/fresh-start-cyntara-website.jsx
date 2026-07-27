import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-website');
}

export default function FreshStartCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-website" />;
}
