import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-website');
}

export default function TopOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-website" />;
}
