import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-website');
}

export default function OfficialMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-website" />;
}
