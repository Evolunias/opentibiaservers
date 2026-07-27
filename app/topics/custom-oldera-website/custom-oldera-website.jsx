import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-website');
}

export default function CustomOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-website" />;
}
