import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-website');
}

export default function CurrentOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-website" />;
}
