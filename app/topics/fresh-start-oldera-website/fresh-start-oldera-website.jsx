import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-website');
}

export default function FreshStartOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-website" />;
}
