import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-website');
}

export default function OfficialKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-website" />;
}
