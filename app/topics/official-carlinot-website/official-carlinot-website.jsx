import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-website');
}

export default function OfficialCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-website" />;
}
