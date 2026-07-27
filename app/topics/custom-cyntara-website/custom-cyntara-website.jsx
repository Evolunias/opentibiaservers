import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-website');
}

export default function CustomCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-website" />;
}
