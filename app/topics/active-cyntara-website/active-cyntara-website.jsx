import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-website');
}

export default function ActiveCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-website" />;
}
