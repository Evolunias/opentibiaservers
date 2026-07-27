import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-website');
}

export default function NewCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-website" />;
}
