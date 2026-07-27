import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-website');
}

export default function OlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="oldera-website" />;
}
