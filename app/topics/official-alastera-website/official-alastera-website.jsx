import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-website');
}

export default function OfficialAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-website" />;
}
