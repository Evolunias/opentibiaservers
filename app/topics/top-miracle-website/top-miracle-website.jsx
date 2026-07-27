import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-website');
}

export default function TopMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-website" />;
}
