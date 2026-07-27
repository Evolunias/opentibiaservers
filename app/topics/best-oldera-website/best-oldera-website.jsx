import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-website');
}

export default function BestOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-website" />;
}
