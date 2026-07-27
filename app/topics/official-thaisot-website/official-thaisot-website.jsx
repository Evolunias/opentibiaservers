import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-website');
}

export default function OfficialThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-website" />;
}
