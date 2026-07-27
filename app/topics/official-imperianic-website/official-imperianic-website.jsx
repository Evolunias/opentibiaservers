import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-website');
}

export default function OfficialImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-website" />;
}
