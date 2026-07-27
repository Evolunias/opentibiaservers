import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-website');
}

export default function PopularOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-website" />;
}
