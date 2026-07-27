import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-website');
}

export default function OfficialAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-website" />;
}
