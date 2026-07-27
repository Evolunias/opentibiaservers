import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-website');
}

export default function ActiveOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-website" />;
}
