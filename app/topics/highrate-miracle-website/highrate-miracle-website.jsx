import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-website');
}

export default function HighrateMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-website" />;
}
