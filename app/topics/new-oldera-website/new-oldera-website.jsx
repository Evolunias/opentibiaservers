import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-website');
}

export default function NewOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-website" />;
}
