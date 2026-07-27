import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-website');
}

export default function OfficialNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-website" />;
}
