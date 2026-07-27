import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-website');
}

export default function OfficialOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-website" />;
}
