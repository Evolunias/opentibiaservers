import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-website');
}

export default function CurrentCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-website" />;
}
